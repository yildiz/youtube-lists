import styles from './style.module.css';
import classnames from 'classnames';

import Button from '@components/button';
import Menu from '@icons/menu';
import Link from 'next/link';

export default function Video({ title, updated_at }) {
	return (
		// <Link href={'/list/[list_id]'} as={'/list/' + title}>
		<Link href={'/lists'} as={'/lists/'}>
			<a className={styles.item}>
				<div className={styles.thumbnail}>
					<img
						src={
							'https://i.ytimg.com/vi/uenYOPGSDds/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBYVeVI2oXCc5EUsbpLhzRj9LyNLQ'
						}
						alt={'v.title'}
					/>
					{/* <div className="info video_time">13:48</div> */}
					<div className={classnames(styles.info, styles.video_time)}>
						<div>362</div>
						<Menu
							width={24}
							height={24}
							style={{ color: '#fff' }}
						/>
					</div>
				</div>
				<div className={styles.info}>
					<div className={styles.right}>
						<div className={styles.title}>{title}</div>
						<div className={styles.details}>
							<div>{updated_at}</div>
						</div>
					</div>
				</div>
			</a>
		</Link>
	);
}
