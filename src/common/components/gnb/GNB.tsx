import styles from './GNB.module.scss';

const { gnb } = styles;

const GNB = () => {
  return (
    <div className={gnb}>
      <div>Menu 1</div>
      <div>Menu 2</div>
      <div>Menu 3</div>
      <div>Menu 4</div>
      <div>Menu 5</div>
    </div>
  );
};

export default GNB;
