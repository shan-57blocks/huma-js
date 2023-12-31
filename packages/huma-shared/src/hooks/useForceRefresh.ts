import { useCallback, useState } from 'react'

export const useForceRefresh = (): [number, () => void] => {
  const [refreshCount, setRefreshCount] = useState(0)

  const refresh = useCallback(() => {
    setRefreshCount((pre) => pre + 1)
  }, [])

  return [refreshCount, refresh]
}
