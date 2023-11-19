// packages
import { connect } from "react-redux";

// redux actions
import { fetchTimelineLists } from "../actions/timelines";

const mapStateToProps = (state) => {
  const { data, loading } = state.timeline;
  return {
    data,
    loading,
  };
};

const mapDispatchToProps = {
  fetchTimelineLists,
};

export default function use(Component) {
  return connect(mapStateToProps, mapDispatchToProps)(Component);
}
