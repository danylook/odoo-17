/** @odoo-module */
import { registry } from "@web/core/registry";
import { useState, onMounted } from "@odoo/owl";

export class AccountMoveForm extends Component {
    setup() {
        this.state = useState({
            showFormaPago: false,
        });

        onMounted(() => {
            this.updateVisibility();
        });
    }

    updateVisibility() {
        const moveType = this.props.record.data.move_type;
        this.state.showFormaPago = ["out_invoice", "out_refund"].includes(moveType);
    }
}

registry.category("view_components").add("account_move_form", AccountMoveForm);
