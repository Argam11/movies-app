import React from "react";
import styles from "../styles/Card.module.css";
import noImage from "../../public/no-image.png";
import { noImageUrl } from "../constants";

interface CardProps {
  title: string;
  url: string;
  imageUrl: string;
  description: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  url,
  imageUrl,
  description,
}) => {
  return (
    <div className={styles.card}>
      <a href={url} target="_blank">
        <div>
          {imageUrl !== noImageUrl ? (
            <img className={styles.image} src={imageUrl} />
          ) : (
            <img className={styles.image} src={noImage.src} />
          )}
        </div>
        <div className={styles.cardInfo}>
          <h2>{title}</h2>
          <p>
            {description.length > 250
              ? `${description.substring(0, 250)}...`
              : description}
          </p>
        </div>
      </a>
    </div>
  );
};