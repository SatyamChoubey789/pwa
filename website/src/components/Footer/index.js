import { h } from 'zak';
import style from './index.css';

export default function () {
	return (
		<footer class={ style.footer }>
			<span>Made with </span>
			<i class={ style.heart } />
			<span> by <a href="https://github.com/SatyamChoubey789">DevDynamos</a></span>
		</footer>
	);
}
