import React from "react";

// Functional Component syntax
function Header(props) {
  return (
    <header className="top">
      <h1>
        Catch
        <span className="ofThe">
          <span className="of">Of</span>
          <span className="the">The</span>
        </span>
        Day
      </h1>
      <h3 className="tagline">
        <span>{props.tagline}</span>
      </h3>
    </header>
  );
}
// Standard Function
// function Component(props){
//     return
// }

// Arrow Function
// const Component = (props) => {
//     return
// }

// Implicit Return
// ( arrow func with no return declaration)
// const Component = props => ()

// props can be destructured Component = ({ tagline, something })
// no need to call props inside render <span>{tagline}</span>

// Class Component syntax
// class Header extends React.Component {
//   render() {
//     return (
//       <header className="top">
//         <h1>
//           Catch
//           <span className="ofThe">
//             <span className="of">Of</span>
//             <span className="the">The</span>
//           </span>
//           Day
//         </h1>
//         <h3 className="tagline">
//           <span>{this.props.tagline}</span>
//         </h3>
//       </header>
//     );
//   }
// }

export default Header;
