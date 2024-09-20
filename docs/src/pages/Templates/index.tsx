import { useState } from 'react';
import { useColorMode } from '@docusaurus/theme-common';

import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import {FiDollarSign, FiDownload, FiEye} from "react-icons/fi"

import { templates, categories, types } from '@site/src/data/templates';

import styles from './index.module.css';

function TemplateList() {
  const { colorMode } = useColorMode();

  return (
    <div className={styles.templatesPage__list}>
      {templates.map(item => (
        <div className={styles.templatesPage__list__item} data-theme={colorMode}>
          <img src={item.image} alt={item.name} className={styles.templatesPage__list__item__cover} />
          <span className={styles.templatesPage__list__item__category}>{item.categories.join(', ')}</span>
          <div className={styles.templatesPage__list__item__body}>
            <span className={styles.templatesPage__list__item__body__name}>{item.name} - {item.jpageVersion}</span>
            <div className={styles.templatesPage__list__item__body__ctaWrapper}>
              <Link className={styles.templatesPage__list__item__body__ctaWrapper__getBtn} to={item.getLink} target="_blank" data-theme={colorMode}>
                {item.type === "Paid" ? <FiDollarSign /> : <FiDownload />}
                {item.type === "Paid" ? "Buy" : "Get"}
              </Link>
              <Link className={styles.templatesPage__list__item__body__ctaWrapper__seeBtn} to={item.viewLink} target="_blank" data-theme={colorMode}>
                <FiEye/>
                See
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home(): JSX.Element {
  const [type, setType] = useState('free');
  const [category, setCategory] = useState('all');
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`Templates`} description="Description will go into a meta tag in <head />">
      <main className={styles.templatesPage}>
        <TemplateList />
      </main>
    </Layout>
  );
}
