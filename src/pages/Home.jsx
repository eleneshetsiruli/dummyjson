import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div className="flex">
      <NavLink to={"skincare"}>
        <div className="imgcare">skinCare</div>
      </NavLink>

      <NavLink to={"skincare"}>
        <div className="sunimg">sunglusses</div>
      </NavLink>
      <div className="flex flex-col ">
        <NavLink to={"skincare"}>
          <div className="lighting">lighting</div>
        </NavLink>
        <NavLink to={"skincare"}>
          <div className="furniture">furniture</div>
        </NavLink>
      </div>
    </div>
  );
};
