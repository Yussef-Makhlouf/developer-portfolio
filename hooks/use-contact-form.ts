import { useState, useCallback } from 'react'
import { useToast } from './use-toast'

interface FormData {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  subject?: string
  message?: string
}

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const { toast } = useToast()

  // Validation functions
  const validateField = useCallback((name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case 'firstName':
        if (!value.trim()) return 'الاسم الأول مطلوب'
        if (value.length < 2) return 'الاسم الأول يجب أن يكون على الأقل حرفين'
        if (value.length > 50) return 'الاسم الأول يجب أن يكون أقل من 50 حرف'
        if (!/^[\u0600-\u06FF\s]+$/.test(value)) return 'الاسم الأول يجب أن يحتوي على أحرف عربية فقط'
        break
      
      case 'lastName':
        if (!value.trim()) return 'الاسم الأخير مطلوب'
        if (value.length < 2) return 'الاسم الأخير يجب أن يكون على الأقل حرفين'
        if (value.length > 50) return 'الاسم الأخير يجب أن يكون أقل من 50 حرف'
        if (!/^[\u0600-\u06FF\s]+$/.test(value)) return 'الاسم الأخير يجب أن يحتوي على أحرف عربية فقط'
        break
      
      case 'email':
        if (!value.trim()) return 'البريد الإلكتروني مطلوب'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'البريد الإلكتروني غير صحيح'
        break
      
      case 'subject':
        if (!value.trim()) return 'الموضوع مطلوب'
        if (value.length < 5) return 'الموضوع يجب أن يكون على الأقل 5 أحرف'
        if (value.length > 100) return 'الموضوع يجب أن يكون أقل من 100 حرف'
        break
      
      case 'message':
        if (!value.trim()) return 'الرسالة مطلوبة'
        if (value.length < 10) return 'الرسالة يجب أن تكون على الأقل 10 أحرف'
        if (value.length > 1000) return 'الرسالة يجب أن تكون أقل من 1000 حرف'
        break
    }
    return undefined
  }, [])

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {}
    let isValid = true

    Object.keys(formData).forEach((key) => {
      const fieldName = key as keyof FormData
      const error = validateField(fieldName, formData[fieldName])
      if (error) {
        newErrors[fieldName] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    return isValid
  }, [formData, validateField])

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }, [errors])

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const error = validateField(name as keyof FormData, value)
    setErrors(prev => ({ ...prev, [name]: error }))
  }, [validateField])

  const resetForm = useCallback(() => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    })
    setErrors({})
  }, [])

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast({
        title: "خطأ في البيانات",
        description: "يرجى تصحيح الأخطاء في النموذج",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        toast({
          title: "تم الإرسال بنجاح!",
          description: result.message,
        })
        
        resetForm()
      } else {
        // Handle validation errors from server
        if (result.errors) {
          const serverErrors: FormErrors = {}
          result.errors.forEach((error: any) => {
            serverErrors[error.field as keyof FormData] = error.message
          })
          setErrors(serverErrors)
        }
        
        toast({
          title: "خطأ في الإرسال",
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      toast({
        title: "خطأ في الاتصال",
        description: "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }, [formData, validateForm, resetForm, toast])

  return {
    formData,
    errors,
    isSubmitting,
    handleInputChange,
    handleBlur,
    handleSubmit,
    resetForm,
  }
} 