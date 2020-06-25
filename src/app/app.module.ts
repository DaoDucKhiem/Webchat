import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { LeftSideNavigationBarComponent } from './components/left-side-navigation-bar/left-side-navigation-bar.component';
import { SearchConversationComponent } from './components/search-conversation/search-conversation.component';
import { ConversationComponent } from './components/conversation/conversation.component';
import { HeaderMessageComponent } from './components/header-message/header-message.component';
import { MessageComponent } from './components/message/message.component';
import { SendMessageComponent } from './components/send-message/send-message.component';
import { AboutComponent } from './components/about/about.component';
import { MainActivityComponent } from './components/main-activity/main-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignInComponent,
    LeftSideNavigationBarComponent,
    SearchConversationComponent,
    ConversationComponent,
    HeaderMessageComponent,
    MessageComponent,
    SendMessageComponent,
    AboutComponent,
    MainActivityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
