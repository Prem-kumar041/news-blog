"use client";
import React, { useState } from 'react';
import data from '../data.json';
import styles from './admin.module.css';

const Show = () => {
  const [rows, setRows] = useState(data);

  const handleDelete = (id) => {
    setRows(rows.filter(item => item.id !== id));
  };

  return (
    <div>
      {rows.map((dataItem, index) => (
        <table key={dataItem.id} className={styles['admin-table']}>
          <tbody>
            <tr>
              <td className={styles['admin-td']}>{dataItem.title}</td>
              <td className={styles['admin-td-sub']}>{dataItem.sub}</td>
              <td className={styles['admin-td']}>
                <button className={styles['admin-btn']}>Edit</button>
              </td>
              <td className={styles['admin-td']}>
                <button
                  className={`${styles['admin-btn']} ${styles['delete']}`}
                  onClick={() => handleDelete(dataItem.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default Show;