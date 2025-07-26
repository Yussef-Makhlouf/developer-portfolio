# Fonts Directory

This directory contains local font files for the website.

## Required Fonts

### Inter Font Family (English)
- Inter-Regular.woff2
- Inter-Medium.woff2
- Inter-SemiBold.woff2
- Inter-Bold.woff2
- Inter-ExtraBold.woff2
- Inter-Black.woff2

### Noto Sans Arabic Font Family (Arabic)
- NotoSansArabic-Regular.woff2
- NotoSansArabic-Medium.woff2
- NotoSansArabic-Bold.woff2

### The Year of Handicrafts Font Family (Custom Arabic)
- TheYearofHandicrafts-Regular.otf
- TheYearofHandicrafts-Medium.otf
- TheYearofHandicrafts-SemiBold.otf
- TheYearofHandicrafts-Bold.otf
- TheYearofHandicrafts-Black.otf

## How to Add Fonts

1. Download the font files from Google Fonts or another source
2. Convert them to WOFF2 format for better performance (except for custom fonts)
3. Place the files in this directory
4. The fonts will be automatically loaded by the CSS

## Font Sources

- Inter: https://fonts.google.com/specimen/Inter
- Noto Sans Arabic: https://fonts.google.com/specimen/Noto+Sans+Arabic
- The Year of Handicrafts: Custom Arabic font

## Performance Notes

- WOFF2 format provides the best compression for web fonts
- OTF format is used for custom fonts that don't have WOFF2 versions
- Font-display: swap ensures text remains visible during font loading
- Local fonts reduce external dependencies and improve loading speed

## Usage in CSS

### English Text
```css
.font-inter {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

### Arabic Text (Standard)
```css
.font-arabic {
  font-family: 'Noto Sans Arabic', 'Arial', 'Tahoma', sans-serif;
}
```

### Arabic Text (Custom Handicrafts)
```css
.font-handicrafts {
  font-family: 'TheYearofHandicrafts', 'Noto Sans Arabic', 'Arial', 'Tahoma', sans-serif;
}

.font-handicrafts-black {
  font-family: 'TheYearofHandicrafts', 'Noto Sans Arabic', 'Arial', 'Tahoma', sans-serif;
  font-weight: 900;
}
```

## Font Weights Available

### Inter
- 400 (Regular)
- 500 (Medium)
- 600 (SemiBold)
- 700 (Bold)
- 800 (ExtraBold)
- 900 (Black)

### Noto Sans Arabic
- 400 (Regular)
- 500 (Medium)
- 700 (Bold)

### The Year of Handicrafts
- 400 (Regular)
- 500 (Medium)
- 600 (SemiBold)
- 700 (Bold)
- 900 (Black) 