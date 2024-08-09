import Link from 'next/link';
import { TablerExternalLink } from './Icons';

export default function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: any;
}) {
  return (
    <div className="flex items-center gap-x-2">
      <TablerExternalLink scope={18} />
      <Link href={href}>{children}</Link>
    </div>
  );
}
