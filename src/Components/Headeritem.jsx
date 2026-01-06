function Headeritem({ name, Icon }) {
  return (
    <div className="flex items-center gap-2 cursor-pointer hover:underline underline-offset-8">
      {Icon && <Icon className="text-[20px] text-white "/>}
      {name && <h2 className="text-white font-semibold">{name}</h2>}
    </div>
  )
}

export default Headeritem
