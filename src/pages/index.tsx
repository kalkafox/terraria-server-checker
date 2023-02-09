import Ring from '@/components/Ring'

import { trpc } from '@/utils/trpc'

export default function Main() {
  const status = trpc.getServerStatus.useQuery()
  if (!status.data)
    return (
      <main className="w-full h-full bg-zinc-900 absolute text-zinc-300">
        <Ring color="rgba(200,200,200,1)" />
      </main>
    )
  return (
    <main className="w-full h-full bg-zinc-900 absolute text-zinc-300">
      {status.data}
    </main>
  )
}
