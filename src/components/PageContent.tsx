import style from '../styles/pageContent.module.css'
export const PageContent = () => {
  const {
    page__content,
    title,
    text,
    button,
    images__container,
    image,
  } = style
  return (
    <article className={page__content}>
      <h1 className={title}>Make remote work</h1>
      <p className={text}>
        Get your team in sync , no matter your location.Streamline processes,
        create team rituals, and watch productivity soar.
      </p>
      <button className={button}>Learn More</button>
      <figure className={images__container}>
        <img className={image} src="./images/client-databiz.svg" alt="databiz-image" />
        <img className={image} src="./images/client-audiophile.svg" alt="audiophile-image" />
        <img className={image} src="./images/client-meet.svg" alt="meet-image" />
        <img className={image} src="./images/client-maker.svg" alt="maker-image" />
      </figure>
    </article>
  );
};
