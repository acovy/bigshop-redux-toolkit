import React from 'react';
import styles from '../../styles/Sidebar.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const { list } = useSelector(({ categories }) => categories);

  const uniqueCategories = Array.from(new Set(list.map(category => category.name)))
    .map(name => list.find(category => category.name === name));

  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>
        CATEGORIES
      </div>
      <nav>
        <ul className={styles.menu}>
          {uniqueCategories.map(({ id, name }) => (
            <li key={id}>
            <NavLink 
              className={({isActive}) => `${styles.link} ${isActive ? styles.active : ""}`}
              to={`/categories/${id}`}>
              {name}
            </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.footer}>
        <a 
          href={"/help"} 
          target='_blank' 
          className={styles.link} 
          rel="noreferrer" 
        >
          Help
        </a>
        <a 
          href={"/terms"} 
          target='_blank' 
          className={styles.link} 
          style={{textDecoration: "underline"}} 
          rel="noreferrer"
        >
          Terms & Conditions
        </a>
      </div>
    </section>
  )
}

export default Sidebar;
