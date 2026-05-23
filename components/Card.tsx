
type CardProps = {
        title: string;
        value: string;
    }

export default function Card({title, value} : CardProps) {
  return (
    <div className="border rounded-lg p-4">
        <h2 className="font-bold">{title}</h2>
        <p className="text-2xl mt-2">{value}</p>
    </div>
  )
}