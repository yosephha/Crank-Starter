import Categories from './categories';
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions/category_action';
import { allCatagories } from '../../reducers/selector';

const mapStateToProps = state => {
  return ({
    categories: allCatagories(state.categories)
  });
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchCatagories: () => dispatch(fetchCategories())
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
