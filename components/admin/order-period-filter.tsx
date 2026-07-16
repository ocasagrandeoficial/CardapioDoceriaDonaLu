import Link from "next/link";

import { cn } from "@/lib/utils";
import { ORDER_PERIODS, type OrderPeriod } from "@/lib/order-period";

interface OrderPeriodFilterProps {
  current: OrderPeriod;
}

export function OrderPeriodFilter({ current }: OrderPeriodFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {ORDER_PERIODS.map(({ value, label }) => (
        <Link
          key={value}
          href={`/admin/pedidos/historico?period=${value}`}
          className={cn(
            "rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
            current === value
              ? "border-pink-600 bg-pink-600 text-white"
              : "border-zinc-200 bg-white text-zinc-600 hover:border-pink-300 hover:text-pink-700"
          )}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
