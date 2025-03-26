
export default async function Page({
    params,
  }: {
    params: Promise<{ name: string }>
  }) {
    const { name } = await params
    return <div> Detail pages for  {name}</div>
  }