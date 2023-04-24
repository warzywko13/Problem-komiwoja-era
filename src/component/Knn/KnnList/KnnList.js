import { KnnListItem } from './KnnListItem/KnnListItem';

export const KnnList = ({ resultPoints }) => {

  const resultList = resultPoints.map(({id, x, y}) => (
      <KnnListItem key={id} x={x} y={y} />
    )
  );

  return (
    <div className="block w-full">
      <ul className="mt-0 w-96 block mx-auto">
        { resultList }
      </ul>
    </div>
  );
}
