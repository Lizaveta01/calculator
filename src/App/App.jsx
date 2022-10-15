import React, { Suspense, Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
  HOME_PAGE_HISTORY_ROUTE,
} from '@/constants'
import Header from '@/components/Header/Header'
import HomePage from '@/pages/Home/HomePage'
import History from '@/components/History/History'
import SettingsPage from '@/pages/Settings/SettingsPage'
import { PageLayout } from '@/layouts'
import { Card } from '@/App/App.styled'
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary'
class App extends Component {
  render() {
    const { theme } = this.props

    return (
      <ThemeProvider theme={theme}>
          <PageLayout>
            <Card>
              <ErrorBoundary>
                <Header />
              </ErrorBoundary>

              <Switch>
                <Route
                  exact
                  path={HOME_PAGE_ROUTE}
                  component={HomePage}
                />
                <Route
                  path={SETTINGS_PAGE_ROUTE}
                  component={SettingsPage}
                />
                <Route
                  path={HOME_PAGE_HISTORY_ROUTE}
                  component={History}
                />
              </Switch>
            </Card>
          </PageLayout>
      </ThemeProvider>
    )
  }
}

const mapStateToProps = state => {
  return {
    theme: state.theme,
  }
}

export default connect(mapStateToProps)(App)

App.propTypes = {
  theme: PropTypes.object,
}
