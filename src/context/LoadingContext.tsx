// contexts/LoadingContext.tsx
import {FC, createContext, useState, useContext, ReactNode} from "react"

interface LoadingContextType {
  isLoading: boolean
  startLoading: () => void
  finishLoading: () => void
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  startLoading: () => {
  },
  finishLoading: () => {
  }
})

export const useLoading = () => useContext(LoadingContext)

export const LoadingProvider: FC<{ children: ReactNode }> = ({children}) => {
  const [isLoading, setLoading] = useState(false)

  const startLoading = () => {
    setLoading(true)
  }
  const finishLoading = () => {
    setLoading(false)
  }

  const contextValue: LoadingContextType = {
    isLoading,
    startLoading,
    finishLoading
  }

  return (
      <LoadingContext.Provider value={contextValue}>
        {children}
      </LoadingContext.Provider>
  )
}
