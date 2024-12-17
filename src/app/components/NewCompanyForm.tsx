'use client';

import { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, Input, Label } from '@/components';
import { CompanyStatus, createCompany } from '@/lib/api';
import { newCompanySchema } from '@/lib/utils';
import styles from '@/styles/companies/new/new-company-form.module.scss';

export type CompanyFieldValues = {
  title: string;
  description: string;
  status: CompanyStatus;
  joinedDate: string;
  categoryId: string;
  countryId: string;
};

export interface NewPromotionFormProps {
  onSubmit?: (...args: any[]) => void;
}

export default function NewPromotionForm({ onSubmit }: NewPromotionFormProps) {
  const [avatar, setAvatar] = useState<File | null>(null);
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(newCompanySchema) });

  const { mutate, isPending } = useMutation({
    mutationFn: createCompany,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['companies'],
      });
    },
  });

  const handleImageUpload = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const file = target.files?.[0];
    if (!file) {
      return;
    }
    setAvatar(file);
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(
        (data) => {
          onSubmit?.(data);
          mutate({ ...data });
        },
        (er) => console.log(er),
      )}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.row}>
            <p className={styles.label}>Logo</p>
            <label className={styles.row}>
              {/* <Input
                className="hidden"
                type="file"
                register={register('avatar', {
                  onChange: (event) => handleImageUpload(event),
                })}
              /> */}
              <input
                className="hidden"
                type="file"
                onInput={handleImageUpload}
              />
              <div className={styles.imageWrapper}>
                {avatar ? (
                  <Image
                    className={styles.preview}
                    src={URL.createObjectURL(avatar)}
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
            <Input
              className={styles.input}
              type="text"
              placeholder="Status"
              register={register('status')}
              error={errors.status?.message}
            />
          </Label>
          <Label className={styles.label}>
            Country
            <Input
              className={styles.input}
              type="text"
              placeholder="Country"
              register={register('countryTitle')}
              error={errors.countryTitle?.message}
            />
          </Label>
        </div>

        <div className={styles.container}>
          <Label className={styles.label}>
            Name
            <Input
              className={styles.input}
              type="text"
              placeholder="Name"
              register={register('title')}
              error={errors.title?.message}
            />
          </Label>
          <Label className={styles.label}>
            Category
            <Input
              className={styles.input}
              type="text"
              placeholder="Category"
              register={register('categoryTitle')}
              error={errors.categoryTitle?.message}
            />
          </Label>
          <Label className={styles.label}>
            Joined date
            <Input
              className={styles.input}
              type="text"
              placeholder="Date"
              register={register('joinedDate')}
              error={errors.joinedDate?.message}
            />
          </Label>
          <Label className={styles.label}>
            Description
            <Input
              className={styles.input}
              type="text"
              placeholder="Description"
              register={register('description')}
              error={errors.description?.message}
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
