import { clsx } from 'clsx'
import Image from 'next/image'

export function Screenshot({
  width,
  height,
  src,
  className,
  priority = false,
}: {
  width: number
  height: number
  src: string
  className?: string
  priority?: boolean
}) {
  return (
    <div
      style={{ '--width': width, '--height': height } as React.CSSProperties}
      className={clsx(
        className,
        'relative aspect-[var(--width)/var(--height)] [--radius:var(--radius-xl)]',
      )}
    >
      <div className="absolute -inset-(--padding) rounded-[calc(var(--radius)+var(--padding))] shadow-xs ring-1 ring-black/5 [--padding:--spacing(2)]" />
      <Image
        alt=""
        src={src}
        width={width}
        height={height}
        priority={priority}
        className="h-full w-auto rounded-(--radius) shadow-2xl ring-1 ring-black/10"
      />
    </div>
  )
}
