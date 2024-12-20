import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'From Boot to Root',
    Svg: require('@site/static/img/sword.svg').default,
    description: (
      <>
         <a class="menu__link" href="/env">Use our PWNGuides to learn techiniques and tactics to atttack everything from your grandma's wifi to corporate infrastructure.</a>
        
      </>
    ),
  },
  {
    title: 'Homelab like a pro',
    Svg: require('@site/static/img/computer-password.svg').default,
    description: (
      <>
        Build your networking empire. Learn how to set up your own streaming and file sharing platforms. Netflix and kill those subscriptions. (Coming Soon) 
      </>
    ),
  },
  {
    title: 'Own this site',
    Svg: require('@site/static/img/computer-disk.svg').default,
    description: (
      <>
        Join us on Github and become a contributor. Or just steal it. Its FOSS and statically generated so you can run it at home. Almost NO setup required
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
