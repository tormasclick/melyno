import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

const getVariantClasses = (variant: ButtonProps['variant']) => {
  switch (variant) {
    case 'destructive':
      return 'bg-red-500 text-white hover:bg-red-600'
    case 'outline':
      return 'border border-gray-300 bg-white hover:bg-gray-50 text-gray-700'
    case 'secondary':
      return 'bg-gray-100 text-gray-900 hover:bg-gray-200'
    case 'ghost':
      return 'hover:bg-gray-100 text-gray-700'
    case 'link':
      return 'text-blue-600 underline-offset-4 hover:underline'
    default:
      return 'bg-gradient-to-r from-teal-500 to-blue-600 text-white hover:shadow-lg'
  }
}

const getSizeClasses = (size: ButtonProps['size']) => {
  switch (size) {
    case 'sm':
      return 'px-4 py-2 text-sm'
    case 'lg':
      return 'px-8 py-3 text-lg'
    case 'icon':
      return 'p-2'
    default:
      return 'px-6 py-2.5 text-base'
  }
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-full"
    const variantClasses = getVariantClasses(variant)
    const sizeClasses = getSizeClasses(size)
    
    return (
      <button
        className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className || ''}`}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"
