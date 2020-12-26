import { useRouter } from 'next/router'

export default function Book() {
  const router = useRouter()
  const { id } = router.query

  return <p>application: {id}</p>
}
