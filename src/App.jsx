import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home.jsx'
// import Login from './Pages/Login.jsx';
import CreateAccount from './Pages/Create-Account.jsx';
import ContactUs from './Pages/Contact-Us.jsx';
import PrivacyPolicy from './Pages/Privacy-policy.jsx';
// import Invoice from './payment-App/Invoice.jsx';
import Transactions from './Dashboard/pages/Transactions.jsx';
import StepContext from './payment-App/StepContext.jsx';
import Payment from './payment-App/Payment.jsx';
import Layout from './Dashboard/components/Layout.jsx';
import Dashboard from './Dashboard/pages/Dashboard.jsx';
import PaymentStatusChecker from './Pages/payment-status.jsx';
import ScrollToTop from './Components/scrolltotop.jsx';
import ExchangeRate from './Dashboard/pages/exchange-rate.jsx';
import Error404 from './Pages/404page.jsx';
import FeedbackForm from './Pages/feedback.jsx';

function App() {
 
  return (

    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element = {<Home />}></Route>
        <Route path= "/Payment-status" element = {<PaymentStatusChecker />}></Route>
        <Route path='/Create-Account' element = {<CreateAccount />}></Route>
        <Route path='/Contact-Us' element={<ContactUs />}></Route>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}></Route>
        <Route path='/Support' element={<FeedbackForm />}></Route>
        <Route path='/page-not-found' element={<Error404/>}></Route>
        <Route path='makepayment' element={<Layout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path='transactions' element={<Transactions />}></Route>
          <Route path='exchange-rate' element={<ExchangeRate />}></Route>
        </Route>
        <Route path='Payment' element={<StepContext><Payment /></StepContext>}></Route>
      </Routes>
    </Router>
  );
}

export default App
