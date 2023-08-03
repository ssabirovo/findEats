import Icons from "../../assets/icons/icons";
import * as List from "../../assets/icons/list";
import cx from "classnames";
import cls from "./cell.module.scss";
import figures from "./inside";

export interface CellComponentProps {
  isBlack: boolean;
  figure: keyof typeof List | "";
  isSelected: boolean;
  onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void;
  deleteFigure: (x: number, y: number) => void;
  setFigure: (x: number, y: number, figure: keyof typeof List) => void;
  xIndex: number;
  yIndex: number;
}

const Cell: React.FC<CellComponentProps> = ({
  figure,
  isBlack,
  isSelected,
  onClick,
  setFigure,
  xIndex,
  yIndex,
  deleteFigure,
}) => {
  return (
    <div
      className={cx(
        cls.cell,
        isBlack && cls.cellWhite,
        isSelected && cls.cellOpen
      )}
    >
      <div className={cx(cls.nav, isSelected && cls.navOpen)}>
        {figures.map((figure, index) => (
          <div
            key={index}
            onClick={() =>
              figure === "Trash"
                ? deleteFigure(xIndex, yIndex)
                : setFigure(xIndex, yIndex, figure)
            }
          >
            <Icons name={figure} key={index} />
          </div>
        ))}
      </div>
      <div onClick={onClick} className={cls.icon}>
        {figure && <Icons name={figure} />}
      </div>
    </div>
  );
};

export default Cell;
