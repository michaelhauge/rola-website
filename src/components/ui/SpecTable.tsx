import { cn } from '@/lib/utils';

export type SpecRow = { label: string; value: string };

type SpecTableProps = {
  rows: SpecRow[];
  className?: string;
};

export function SpecTable({ rows, className }: SpecTableProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border border-zinc-200',
        className
      )}
    >
      <table className="w-full text-left">
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.label}
              className={cn(
                'border-b border-zinc-100 last:border-b-0',
                i % 2 === 0 ? 'bg-white' : 'bg-zinc-50/50'
              )}
            >
              <th className="px-6 py-4 text-sm font-medium text-zinc-600">
                {row.label}
              </th>
              <td className="px-6 py-4 text-sm text-zinc-900">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
