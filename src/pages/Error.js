import { Helmet } from 'react-helmet';
function Error() {
	return (
		<div>
		<Helmet>
	      <title>Page Not Found</title>
	    </Helmet>
		<p>Error: Page not found</p>
		</div>
		);
}

export default Error;