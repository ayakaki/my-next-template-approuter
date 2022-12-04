type Props = {
  onClickEvent: any; // ボタン押下時に実行する処理
};

export const BigButton = (props: Props) => {
  const { onClickEvent } = props;

  //////////////////////////////////
  // 画面描画要素
  //////////////////////////////////
  return (
    <>
      <button onClick={onClickEvent}>クリック！</button>
    </>
  );
};
