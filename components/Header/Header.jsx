import Link from "next/link";

const Header = () => {
  return (
    <div className="w-[70%] mx-auto">
      <ul className="absolute right-0 left-0 top-[3rem] flex items-center justify-center gap-[2rem]">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/counter">Counter</Link>
        </li>
        <li>
          <Link href="/todo">Todo List</Link>
        </li>
        <li>
          <Link href="/shopping">Shopping</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
