'use client';

import { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import { Button } from '@/components';
import styles from '@/styles/companies/new/new-company-form.module.scss';

export interface NewCompanyFormProps {}

export default function NewCompanyForm({}: NewCompanyFormProps) {
  const [image, setImage] = useState<File | null>(null);

  const handleImageUpload = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const file = target.files?.[0];
    if (!file) {
      return;
    }
    setImage(file);
  };

  return (
    <form className={styles.form}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.row}>
            <p className={styles.label}>Logo</p>
            <label className={styles.row}>
              <input
                className="hidden"
                type="file"
                onInput={handleImageUpload}
              />
              <div className={styles.imageWrapper}>
                {image ? (
                  <Image
                    className={styles.preview}
                    src={URL.createObjectURL(image)}
                    width={176}
                    height={176}
                    alt="Preview"
                  />
                ) : (
                  <div className={styles.uploadBtn}>
                    <svg width={48} height={48}>
                      <use href="/sprite.svg#cloud"></use>
                    </svg>
                    <p>Upload photo</p>
                  </div>
                )}
              </div>
            </label>
          </div>
          <label className={styles.label}>
            Status
            <input className={styles.input} type="text" placeholder="Status" />
          </label>
          <label className={styles.label}>
            Country
            <input className={styles.input} type="text" placeholder="Country" />
          </label>
        </div>

        <div className={styles.container}>
          <label className={styles.label}>
            Name
            <input className={styles.input} type="text" placeholder="Name" />
          </label>
          <label className={styles.label}>
            Category
            <input
              className={styles.input}
              type="text"
              placeholder="Category"
            />
          </label>
          <label className={styles.label}>
            Joined date
            <input className={styles.input} type="text" placeholder="Date" />
          </label>
          <label className={styles.label}>
            Description
            <input
              className={styles.input}
              type="text"
              placeholder="Description"
            />
          </label>
        </div>
      </div>

      <Button className={styles.submitBtn} type="submit">
        Add company
      </Button>
    </form>
  );
}
