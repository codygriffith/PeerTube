import { NgModule } from '@angular/core'
import { CanDeactivateGuard } from '@app/core'
import { VideoEditModule } from './shared/video-edit.module'
import { DragDropDirective } from './video-add-components/drag-drop.directive'
import { VideoImportTorrentComponent } from './video-add-components/video-import-torrent.component'
import { VideoMirrorUrlComponent } from './video-add-components/video-mirror-url.component'
import { VideoImportUrlComponent } from './video-add-components/video-import-url.component'
import { VideoGoLiveComponent } from './video-add-components/video-go-live.component'
import { VideoUploadComponent } from './video-add-components/video-upload.component'
import { VideoAddRoutingModule } from './video-add-routing.module'
import { VideoAddComponent } from './video-add.component'

@NgModule({
  imports: [
    VideoAddRoutingModule,

    VideoEditModule
  ],

  declarations: [
    VideoAddComponent,
    VideoUploadComponent,
    VideoMirrorUrlComponent,
    VideoImportUrlComponent,
    VideoImportTorrentComponent,
    DragDropDirective,
    VideoGoLiveComponent
  ],

  exports: [ ],

  providers: [
    CanDeactivateGuard
  ]
})
export class VideoAddModule { }
