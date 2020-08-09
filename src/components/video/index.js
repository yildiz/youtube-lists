import styles from './style.module.css';
import classnames from 'classnames';
// import './Video.module.css'

export default function Video() {
	return (
		<>
			<div className={styles.item}>
				<div className={styles.thumbnail}>
					<img
						src={
							'https://i.ytimg.com/vi/uenYOPGSDds/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBYVeVI2oXCc5EUsbpLhzRj9LyNLQ'
						}
						alt={'v.title'}
					/>
					{/* <div className="info video_time">13:48</div> */}
					<div className={classnames(styles.info, styles.video_time)}>
						0:57
					</div>
				</div>
				<div className={styles.info}>
					<img
						className={styles.channelPic}
						src={
							'https://lh3.googleusercontent.com/a-/AOh14Ggg47duEbnFvXu9uSbIW2Q4Fuu1Dupvar-3kYRmG7k=s88-c-k-c0x00ffffff-no-rj-mo'
						}
						alt="kanal adı"
					/>
					<div className={styles.right}>
						<div className={styles.title}>no, don't do it</div>
						<div className={styles.details}>
							<div className={styles.channelName}>
								v.channelTitle
							</div>
							<div className={styles.views}>
								{'27'} B görüntülenme • {'14 saat önce'}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
