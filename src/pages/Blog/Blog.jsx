import React from "react";
import Container from "../../components/Container";
import Pdf from "react-to-pdf";

const Blog = () => {
  const ref = React.createRef();
  const ref2 = React.createRef();
  const ref3 = React.createRef();
  const ref4 = React.createRef();
  return (
    <div className="bg-slate-100">
      <Container>
        <div className="py-[100px]">
          <h1 className="text-center text-3xl font-bold md:text-6xl">Blog</h1>
        </div>
        <div className="py-20 grid grid-cols-2 gap-6">
          <div className="bg-white shadow-md p-4 rounded-md">
            <div className="flex justify-end">
              <Pdf targetRef={ref4} filename="code-example.pdf">
                {({ toPdf }) => (
                  <button
                    className="bg-primary px-4 py-2 w-[200px] h-fit font-semibold text-white rounded-lg"
                    onClick={toPdf}
                  >
                    Generate Pdf
                  </button>
                )}
              </Pdf>
            </div>
            <div className="px-4" ref={ref4}>
              <h3 className="md:text-3xl text-lg font-semibold py-4">
                Differences between uncontrolled and controlled components?
              </h3>
              <p className="text-lg">
                The concepts of uncontrolled and controlled components refer to
                how components handle data input and state management. <br />
                <b>Uncontrolled components</b> are components that manage their
                own state internally, without requiring explicit control from
                the parent component or the React framework. In uncontrolled
                components, the state is managed by the DOM itself, using refs.
                The component is responsible for rendering the input element and
                handling the input events, but the value of the input is not
                managed by the component. The value of the input is instead
                controlled by the DOM itself.
                <br />
                <b>Controlled components</b>, on the other hand, are components
                that rely on external state management to handle data input. In
                controlled components, the value of the input is managed by the
                parent component or the React framework. The parent component
                passes down the value of the input as a prop, and the controlled
                component listens for changes to that prop and updates its state
                accordingly. This approach allows the parent component to have
                full control over the input's value and to perform any necessary
                validation or transformation of the input data.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md p-4 rounded-md">
            <div className="flex justify-end">
              <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => (
                  <button
                    className="bg-primary px-4 py-2 w-[200px] h-fit font-semibold text-white rounded-lg"
                    onClick={toPdf}
                  >
                    Generate Pdf
                  </button>
                )}
              </Pdf>
            </div>
            <div ref={ref} className="px-4">
              <h3 className=" md:text-3xl text-lg font-semibold py-4">
                How to validate React props using PropTypes?
              </h3>
              <p className="text-lg">
                React PropTypes is a built-in feature that allows developers to
                validate the types of props passed to a component. This is
                important for ensuring that the correct data types are used
                throughout the application, which can help to prevent errors and
                improve code quality. To use PropTypes in a React component,
                first, you need to import the PropTypes module from the
                'prop-types' library. This can be done as follows:
                <br />
              </p>
              <span className="mockup-code my-4 block">
                <pre data-prefix="$">
                  <code>import PropTypes from 'prop-types';</code>
                </pre>
              </span>
              <p className="text-lg">
                Once you have imported PropTypes, you can define the expected
                types and validation rules for each prop by adding a propTypes
                property to the component.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md p-4 rounded-md">
            <div className="flex justify-end">
              <Pdf targetRef={ref2} filename="code-example.pdf">
                {({ toPdf }) => (
                  <button
                    className="bg-primary px-4 py-2 w-[200px] h-fit font-semibold text-white rounded-lg"
                    onClick={toPdf}
                  >
                    Generate Pdf
                  </button>
                )}
              </Pdf>
            </div>
            <div ref={ref2} className="px-4">
              <h3 className="md:text-3xl text-lg font-semibold py-4">
                Difference between nodejs and express js?
              </h3>
              <p className="text-lg">
                Node.js and Express.js are two popular technologies in the web
                development world, but they serve different purposes.
                <br />
                <br />
                <span className="block py-2">
                  Node.js is a JavaScript runtime environment built on the V8
                  JavaScript engine used for server-side programming. It
                  provides an event-driven, non-blocking I/O model that allows
                  developers to build scalable and high-performance
                  applications. Node.js can be used to create web servers, APIs,
                  command-line tools, and other types of server-side
                  applications. Node.js provides a runtime environment and a set
                  of core modules that provide low-level functionality such as
                  file I/O, network I/O, and process management.
                </span>
                Express.js, on the other hand, is a web application framework
                built on top of Node.js that provides an easier and more
                flexible way to build web applications. Express.js provides a
                set of features and tools for building web applications,
                including routing, middleware, and template engines. Express.js
                is designed to be lightweight and flexible, allowing developers
                to use it to build everything from small, single-page
                applications to large, complex web applications.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md p-4 rounded-md">
            <div className="flex justify-end">
              <Pdf targetRef={ref3} filename="code-example.pdf">
                {({ toPdf }) => (
                  <button
                    className="bg-primary px-4 py-2 w-[200px] h-fit font-semibold text-white rounded-lg"
                    onClick={toPdf}
                  >
                    Generate Pdf
                  </button>
                )}
              </Pdf>
            </div>
            <div ref={ref3} className="px-4">
              <h3 className="md:text-3xl text-lg font-semibold py-4">
                What is a custom hook, and why will you create a custom hook?
              </h3>
              <p className="text-lg">
                In React, a custom hook is a function that allows developers to
                reuse stateful logic across different components. Custom hooks
                are a powerful tool for creating reusable and composable code in
                React, and they can help to simplify the development process by
                encapsulating complex logic into a single function.
                <br />
              </p>
              <span className="block py-2">
                <ul>
                  <ol>
                    <b>Reusability:</b> Custom hooks allow developers to extract
                    and reuse stateful logic across multiple components, making
                    it easier to maintain and update the codebase.
                  </ol>
                  <ol>
                    <b>Abstraction:</b> Custom hooks can abstract complex logic
                    into a single function, making it easier to reason about and
                    test.
                  </ol>
                  <ol>
                    <b>Separation of concerns:</b> Custom hooks can help to
                    separate concerns by encapsulating specific functionality,
                    such as API calls or event handling, into a single function.
                  </ol>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
