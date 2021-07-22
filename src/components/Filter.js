//Tools
import { Table } from 'reactstrap';

function Filter(props){
    return (
        <div className="filter" hidden={props.hidden}>
            <Table className="text-center filter-table shadow" size="sm" bordered> 
                <thead>
                    <tr>
                        <th>Qiymət Aralığı</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Username</th>
                    </tr>
                </thead>

                <tbody className="filter-list">
                    <tr>
                        <td>
                            <div className="filter-settings">
                                <input type="number" min="0" placeholder="MİN." className="price-filter-inp" />
                                <input type="number" min="0" placeholder="MAX." className="price-filter-inp" />
                                <span> ₼</span>
                            </div>
                        </td>
                        <td>
                            <div className="filter-settings">
                                <select name="cars" id="cars" className="filter-select" required>
                                    <option value="volvo">Qiymət</option>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                        </td>
                        <td>
                            <div className="filter-settings">
                                <select name="cars" id="cars" className="filter-select" required>
                                    <option value="volvo">Qiymət</option>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                        </td>
                        <td>
                            <div className="filter-settings">
                                <select name="cars" id="cars" className="filter-select" required>
                                    <option value="volvo">Qiymət</option>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                        </td>
                    </tr>
                </tbody>



            </Table>
        </div>
    )
}

export default Filter;