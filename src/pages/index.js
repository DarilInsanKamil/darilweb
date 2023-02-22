import { Desktop } from '@/components/desktop'
import { Mobile } from '@/components/mobile'
import { useMediaQuery } from '../setting/mediaquery'

export default function Home() {
  const query = useMediaQuery(768)
  return (
    <div>
      {query ? (<Mobile />) : (<Desktop />)}
    </div>
  )
}