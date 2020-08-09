import classnames from 'classnames';
import ReactPlaceholder from 'react-placeholder';

import styles from './style.module.css';

export function VideoPlaceholder() {
	return (
		<div
			style={{
				width: '100%',
				maxWidth: '360px',
				marginRight: 10,
				marginBottom: 20,
			}}>
			<ReactPlaceholder
				type="rect"
				showLoadingAnimation={true}
				color="var(--video-placeholder-background)"
				style={{ width: '100%', height: '190px', marginBottom: 10 }}
			/>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
				}}>
				<ReactPlaceholder
					showLoadingAnimation={true}
					type="round"
					color="var(--video-placeholder-background)"
					ready={false}
					style={{ width: 50, height: 50, marginRight: 10 }}
				/>
				<ReactPlaceholder
					showLoadingAnimation={true}
					type="text"
					rows={3}
					color="var(--video-placeholder-background)"
					ready={false}
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignSelf: 'center',
						justifyContent: 'center',
						width: '50%',
					}}
				/>
			</div>
		</div>
	);
}

export default function Video({ video }) {
	const {
		videoId,
		videoTitle,
		thumbnail,
		channelName,
		views,
		videoTime,
		createdAt,
	} = video;
	return (
		<>
			<div className={styles.item}>
				<div className={styles.thumbnail}>
					<img src={thumbnail} alt={videoTitle} />
					{/* <div className="info video_time">13:48</div> */}
					<div className={classnames(styles.info, styles.video_time)}>
						{videoTime}
					</div>
				</div>
				<div className={styles.info}>
					<img
						className={styles.channelPic}
						src={
							'https://lh3.googleusercontent.com/a-/AOh14Ggg47duEbnFvXu9uSbIW2Q4Fuu1Dupvar-3kYRmG7k=s88-c-k-c0x00ffffff-no-rj-mo'
						}
						alt={channelName}
					/>
					<div className={styles.right}>
						<div className={styles.title}>{videoTitle}</div>
						<div className={styles.details}>
							<div className={styles.channelName}>
								{channelName}
							</div>
							<div className={styles.views}>
								{views} görüntülenme • {createdAt} önce
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
