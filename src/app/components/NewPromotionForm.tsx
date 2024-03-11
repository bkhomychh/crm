'use client';

import { ChangeEvent, useState } from 'react';
import Image from 'next/image';

import { Button, Input, Label } from '@/components';
import styles from '@/styles/companies/[id]/new-promotion/new-promotion-form.module.scss';

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
      <Label className={styles.label}>
        Title
        <Input className={styles.input} type="text" placeholder="Title" />
      </Label>
      <Label className={styles.label}>
        Description
        <Input className={styles.input} type="text" placeholder="Description" />
      </Label>
      <Label className={styles.label}>
        Discount amount
        <Input
          className={styles.input}
          type="text"
          placeholder=" Discount amount"
        />
      </Label>

      <Label>
        Image
        <input className="hidden" type="file" onInput={handleImageUpload} />
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
      </Label>

      <Button className={styles.submitBtn} type="submit">
        Add promotion
      </Button>
    </form>
  );
}
