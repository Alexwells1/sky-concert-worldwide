import { Link } from 'react-router-dom';
import type { ButtonProps } from '../../types';

export default function Button({ variant, children, onClick, href, className = '', type = 'button' }: ButtonProps) {
  const cls = `${variant === 'primary' ? 'btn-primary' : variant === 'secondary' ? 'btn-secondary' : 'btn-ghost'} ${className}`;

  if (href) {
    if (href.startsWith('/')) {
      return <Link to={href} className={cls}>{children}</Link>;
    }
    return <a href={href} className={cls}>{children}</a>;
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
