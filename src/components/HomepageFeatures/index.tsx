import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import DocusaurusImageUrl from '@site/static/img/ComputerBasedProblemSolving.png';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div style={{textAlign: 'center'}}>
        <img src={DocusaurusImageUrl} />
        </div>
        <div className="text">
          <p>The goal of this book is to take students from the point of never having done any formal programming and lead them first through a structured method of problem solving (Input-Process-Output and Top-Down design), then into basic Structured Programming and then into the early basics of Object Oriented Programming (or OOP). If this book is used to teach a high school course in computer programming, there are likely many other learning outcomes that students are required to do that are not presented in this book. The focus of this book is strictly on solving problems with computer programming.</p>
        <h2>Running the Code Examples</h2>
        <p>You can run all the code examples in this book using GitHub Codespaces. Click the button below to open this repository in GitHub Codespaces. It will take a few minutes to build the environment, but once it's done you can run any of the code examples in the book. Note that you will need a GitHub login to use this feature.</p>
        <p>
          <img src='https://github.com/codespaces/badge.svg'></img>
        </p>
        </div>
      </div>
    </section>
  )
}
