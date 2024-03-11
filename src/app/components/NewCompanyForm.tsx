'use client';

import { ChangeEvent, useState } from 'react';
import Image from 'next/image';

import { Button, Input, Label } from '@/components';
import styles from '@/styles/companies/new/new-company-form.module.scss';

export interface NewPromotionFormProps {}

export default function NewPromotionForm({}: NewPromotionFormProps) {
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
          <Label className={styles.label}>
            Status
            <Input className={styles.input} type="text" placeholder="Status" />
          </Label>
          <Label className={styles.label}>
            Country
            <Input className={styles.input} type="text" placeholder="Country" />
          </Label>
        </div>

        <div className={styles.container}>
          <Label className={styles.label}>
            Name
            <Input className={styles.input} type="text" placeholder="Name" />
          </Label>
          <Label className={styles.label}>
            Category
            <Input
              className={styles.input}
              type="text"
              placeholder="Category"
            />
          </Label>
          <Label className={styles.label}>
            Joined date
            <Input className={styles.input} type="text" placeholder="Date" />
          </Label>
          <Label className={styles.label}>
            Description
            <Input
              className={styles.input}
              type="text"
              placeholder="Description"
            />
          </Label>
        </div>
      </div>

      <Button className={styles.submitBtn} type="submit">
        Add company
      </Button>
    </form>
  );
}
