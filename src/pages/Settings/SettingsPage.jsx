import React from 'react'
import ControlPanel from '@/components/ControlPanel/ControlPanel'
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary'

const SettingsPage = () => {
  return (
    <React.Fragment>
      <ErrorBoundary>
        <ControlPanel />
      </ErrorBoundary>
    </React.Fragment>
  )
}
export default SettingsPage
