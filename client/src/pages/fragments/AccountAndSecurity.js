import React, { Component } from "react";

import { PageHeader } from "../../components/PageHeader";
import { PageContainer } from "../../components/PageContainer";
import { CardItem } from "../../components/CardItem";
import { OpenCard } from "../../components/OpenCard";

export default class AccountAndSecurity extends Component {
    render() {
        return (
            <>
                <div className="d-header-container">
                    <PageHeader labelName={["Account & Security"]} />
                    <PageContainer>
                        <div>Account & Security</div>
                    </PageContainer>
                    <OpenCard />
                </div>
            </>
        );
    }
}
