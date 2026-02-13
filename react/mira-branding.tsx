import { CSSProperties } from 'react';

export interface MiraBrandingProps {
  /** 
   * Whether to show branding - MUST come from useForm().showBranding
   * This value is controlled by the API based on subscription plan.
   * Do not hardcode this value.
   */
  show: boolean;
  /** Custom class name */
  className?: string;
  /** Custom styles for positioning only */
  style?: CSSProperties;
  /** Theme for branding colors */
  theme?: 'light' | 'dark';
}

/**
 * Forms Expert branding component - "Powered by Forms Expert"
 * 
 * Use this component when building custom forms with the useForm hook
 * to maintain branding compliance based on your subscription plan.
 * 
 * @example
 * const { showBranding } = useForm({ slug: 'my-form' });
 * return (
 *   <form>
 *     {fields}
 *     <MiraBranding show={showBranding} />
 *   </form>
 * );
 */
export function MiraBranding({ 
  show, 
  className = '',
  style,
  theme = 'light',
}: MiraBrandingProps) {
  if (!show) return null;

  const linkColor = theme === 'dark' ? '#9ca3af' : '#6b7280';
  const hoverColor = '#6366f1';

  return (
    <div 
      className={`mira-branding ${className}`}
      style={{
        textAlign: 'center',
        padding: '12px 0 4px',
        fontSize: '12px',
        ...style,
      }}
    >
      <a 
        href="https://mira.io?ref=form" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          color: linkColor,
          textDecoration: 'none',
          transition: 'color 0.2s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = hoverColor}
        onMouseLeave={(e) => e.currentTarget.style.color = linkColor}
      >
        Powered by Forms Expert
      </a>
    </div>
  );
}
