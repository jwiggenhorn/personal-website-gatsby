/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import './app.css'

interface ILayoutProps {
	children: React.ReactNode
}

function Layout({ children }: ILayoutProps): JSX.Element {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<>
			<Header siteTitle={data.site.siteMetadata?.title || ''} />
			<div className="layout">
				<main>{children}</main>
				<footer className="footer">© 2021 Jonah Wiggenhorn</footer>
			</div>
		</>
	)
}

export default Layout
