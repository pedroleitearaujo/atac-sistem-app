export function Header({...props}){
    return (
    <header className="h-25 flex justify-center py-6">
        <img src={props.logo} className="h-12"></img>
        <h1 className="pt-3 text-xl"> Atac </h1>
        <h1 className="text-red-500 pt-3 text-xl"> Delivery </h1>
      </header>
    )
}